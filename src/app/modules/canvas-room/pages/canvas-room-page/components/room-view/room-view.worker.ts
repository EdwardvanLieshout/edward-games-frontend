/// <reference lib="webworker" />

import { TextureTypeEnum } from '../../../../../../shared/models/enums/textureType.enum';
import { TileTypeEnum } from '../../../../../../shared/models/enums/tileType.enum';

addEventListener('message', ({ data }) => {
  const dirX = data.dirX;
  const dirY = data.dirY;
  const planeX = data.planeX;
  const planeY = data.planeY;
  const posX = data.posX;
  const posY = data.posY;
  const map = data.map;
  const SCREEN_WIDTH = data.screen_width;
  const SCREEN_HEIGHT = data.screen_height;
  const TEXTURE_WIDTH = data.texture_width;
  const TEXTURE_HEIGHT = data.texture_height;
  const textures = data.textures;
  const imageData = data.imageData;
  const animationCounter = data.animationCounter;
  const timestamp = data.timestamp;

  const rayDirX0 = dirX - planeX;
  const rayDirY0 = dirY - planeY;
  const rayDirX1 = dirX + planeX;
  const rayDirY1 = dirY + planeY;

  const posZ = 0.5 * SCREEN_HEIGHT;

  let floorTexture;
  let ceilingTexture;
  floorTexture = TextureTypeEnum.PLAIN;
  ceilingTexture = TextureTypeEnum.PLAIN;

  let mapX = Math.trunc(posX);
  let mapY = Math.trunc(posY);

  let sideDistX;
  let sideDistY;

  for (let y = 0; y < SCREEN_HEIGHT; y++) {
    const p = y - SCREEN_HEIGHT / 2;

    const rowDistance = posZ / p;

    const floorStepX = (rowDistance * (rayDirX1 - rayDirX0)) / SCREEN_WIDTH;
    const floorStepY = (rowDistance * (rayDirY1 - rayDirY0)) / SCREEN_WIDTH;

    let floorX = posX + rowDistance * rayDirX0;
    let floorY = posY + rowDistance * rayDirY0;
    for (let x = 0; x < SCREEN_WIDTH; x++) {
      const cellX = Math.trunc(floorX);
      const cellY = Math.trunc(floorY);

      if (map[cellX] && map[cellX][cellY] && map[cellX][cellY].tex1 !== undefined) {
        floorTexture = map[cellX][cellY].tex0;
        ceilingTexture = map[cellX][cellY].tex1;
      }

      // tslint:disable-next-line:no-bitwise
      const tx = Math.trunc(TEXTURE_WIDTH * (floorX - cellX)) & (TEXTURE_WIDTH - 1);
      // tslint:disable-next-line:no-bitwise
      const ty = Math.trunc(TEXTURE_HEIGHT * (floorY - cellY)) & (TEXTURE_HEIGHT - 1);

      floorX += floorStepX;
      floorY += floorStepY;

      const texIndex = (TEXTURE_WIDTH * ty + tx) * 4;
      let color = {
        r: textures[floorTexture].data[texIndex],
        g: textures[floorTexture].data[texIndex + 1],
        b: textures[floorTexture].data[texIndex + 2],
        a: textures[floorTexture].data[texIndex + 3],
      };

      color.r = color.r / rowDistance;
      color.g = color.g / rowDistance;
      color.b = color.b / rowDistance;
      let dataIndex = (y * SCREEN_WIDTH + x) * 4;
      imageData.data[dataIndex] = color.r;
      imageData.data[dataIndex + 1] = color.g;
      imageData.data[dataIndex + 2] = color.b;
      imageData.data[dataIndex + 3] = color.a;

      color = {
        r: textures[ceilingTexture].data[texIndex],
        g: textures[ceilingTexture].data[texIndex + 1],
        b: textures[ceilingTexture].data[texIndex + 2],
        a: textures[ceilingTexture].data[texIndex + 3],
      };

      color.r = color.r / rowDistance;
      color.g = color.g / rowDistance;
      color.b = color.b / rowDistance;
      dataIndex = ((SCREEN_HEIGHT - y - 1) * SCREEN_WIDTH + x) * 4;
      imageData.data[dataIndex] = color.r;
      imageData.data[dataIndex + 1] = color.g;
      imageData.data[dataIndex + 2] = color.b;
      imageData.data[dataIndex + 3] = color.a;
    }
  }

  for (let x = 0; x < SCREEN_WIDTH; x++) {
    const cameraX = (2 * x) / SCREEN_WIDTH - 1;
    const rayDirX = dirX + planeX * cameraX;
    const rayDirY = dirY + planeY * cameraX;

    mapX = Math.trunc(posX);
    mapY = Math.trunc(posY);

    const deltaDistX = Math.sqrt(1 + (rayDirY * rayDirY) / (rayDirX * rayDirX));
    const deltaDistY = Math.sqrt(1 + (rayDirX * rayDirX) / (rayDirY * rayDirY));
    let perpWallDist;

    let stepX;
    let stepY;

    let hit = false;
    let side = false;

    if (rayDirX < 0) {
      stepX = -1;
      sideDistX = (posX - mapX) * deltaDistX;
    } else {
      stepX = 1;
      sideDistX = (mapX + 1.0 - posX) * deltaDistX;
    }
    if (rayDirY < 0) {
      stepY = -1;
      sideDistY = (posY - mapY) * deltaDistY;
    } else {
      stepY = 1;
      sideDistY = (mapY + 1.0 - posY) * deltaDistY;
    }
    while (!hit) {
      if (sideDistX < sideDistY) {
        sideDistX += deltaDistX;
        mapX += stepX;
        side = false;
      } else {
        sideDistY += deltaDistY;
        mapY += stepY;
        side = true;
      }
      if (map[mapX][mapY].tileType === TileTypeEnum.WALL) {
        hit = true;
      }
    }

    if (!side) {
      perpWallDist = (mapX - posX + (1 - stepX) / 2) / rayDirX;
    } else {
      perpWallDist = (mapY - posY + (1 - stepY) / 2) / rayDirY;
    }

    const lineHeight = Math.trunc(SCREEN_HEIGHT / perpWallDist) + 10;

    let drawStart = Math.trunc(-lineHeight / 2 + SCREEN_HEIGHT / 2);
    if (drawStart < 0) {
      drawStart = 0;
    }
    let drawEnd = Math.trunc(lineHeight / 2 + SCREEN_HEIGHT / 2);
    if (drawEnd >= SCREEN_HEIGHT) {
      drawEnd = SCREEN_HEIGHT - 1;
    }

    let texNum = map[mapX][mapY].tex0;
    if (texNum === TextureTypeEnum.TV1 || texNum === TextureTypeEnum.TV1S || texNum === TextureTypeEnum.PORTAL1) {
      texNum += animationCounter;
    }
    if (texNum === TextureTypeEnum.GRIDINFO && side) {
      texNum = TextureTypeEnum.GREENGRID;
    }

    let wallX;
    if (!side) {
      wallX = posY + perpWallDist * rayDirY;
    } else {
      wallX = posX + perpWallDist * rayDirX;
    }
    wallX -= Math.trunc(wallX);
    let texX = Math.trunc(wallX * TEXTURE_WIDTH);
    if (!side && rayDirX > 0) {
      texX = TEXTURE_WIDTH - texX - 1;
    }
    if (side && rayDirY < 0) {
      texX = TEXTURE_WIDTH - texX - 1;
    }

    const step = (1.0 * TEXTURE_HEIGHT) / lineHeight;
    let texPos = (drawStart - SCREEN_HEIGHT / 2 + lineHeight / 2) * step;
    for (let y = drawStart; y < drawEnd; y++) {
      // tslint:disable-next-line:no-bitwise
      const texY = Math.trunc(texPos) & (TEXTURE_HEIGHT - 1);
      texPos += step;
      const texIndex = (TEXTURE_HEIGHT * texY + texX) * 4;
      const color = {
        r: textures[texNum].data[texIndex],
        g: textures[texNum].data[texIndex + 1],
        b: textures[texNum].data[texIndex + 2],
        a: textures[texNum].data[texIndex + 3],
      };

      color.r = (color.r * (lineHeight > SCREEN_HEIGHT ? SCREEN_HEIGHT : lineHeight)) / SCREEN_HEIGHT;
      color.g = (color.g * (lineHeight > SCREEN_HEIGHT ? SCREEN_HEIGHT : lineHeight)) / SCREEN_HEIGHT;
      color.b = (color.b * (lineHeight > SCREEN_HEIGHT ? SCREEN_HEIGHT : lineHeight)) / SCREEN_HEIGHT;

      const dataIndex = (y * SCREEN_WIDTH + x) * 4;
      imageData.data[dataIndex] = color.r;
      imageData.data[dataIndex + 1] = color.g;
      imageData.data[dataIndex + 2] = color.b;
      imageData.data[dataIndex + 3] = color.a;
    }
  }

  postMessage({ imageData: imageData, timestamp: timestamp });
});
