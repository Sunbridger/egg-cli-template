// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBury from '../../../app/model/bury';

declare module 'egg' {
  interface IModel {
    Bury: ReturnType<typeof ExportBury>;
  }
}
