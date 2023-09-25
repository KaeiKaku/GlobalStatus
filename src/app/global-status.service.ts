import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

type PDFFolder = {
  apiPrefix: string;
  apiFolder: string;
  subApiFolder: {
    selected: boolean;
    folderName: string;
  }[];
};

interface GlobalStatus {
  general: PDFFolder;
  kaikei: PDFFolder;
  kansa: PDFFolder;
}

@Injectable({
  providedIn: 'root',
})
export class GlobalStatusService {
  private _GlobalStatus: BehaviorSubject<GlobalStatus> =
    new BehaviorSubject<GlobalStatus>({
      general: {
        apiPrefix: 'api/Prefix',
        apiFolder: 'general',
        subApiFolder: [
          {
            selected: true,
            folderName: 'a',
          },
          {
            selected: false,
            folderName: 'b',
          },
          {
            selected: true,
            folderName: 'c',
          },
        ],
      },
      kaikei: {
        apiPrefix: 'api/Prefix',
        apiFolder: 'kaikei',
        subApiFolder: [
          {
            selected: true,
            folderName: 'aa',
          },
          {
            selected: false,
            folderName: 'bb',
          },
          {
            selected: true,
            folderName: 'cc',
          },
        ],
      },
      kansa: {
        apiPrefix: 'api/Prefix',
        apiFolder: 'kansa',
        subApiFolder: [
          {
            selected: true,
            folderName: 'aaa',
          },
          {
            selected: false,
            folderName: 'bbb',
          },
          {
            selected: true,
            folderName: 'ccc',
          },
        ],
      },
    });

  constructor() {}

  getTest(): Observable<GlobalStatus> {
    return this._GlobalStatus.asObservable();
  }

  getGeneralStatus(): Observable<PDFFolder> {
    return this._GlobalStatus.pipe(
      map((globalStatus) => ({ ...globalStatus.general }))
    );
  }
  patchGeneralStatus(datum: PDFFolder): void {
    this._GlobalStatus.next({
      ...this._GlobalStatus.getValue(),
      general: datum,
    });
  }

  getKansa(): Observable<PDFFolder> {
    return this._GlobalStatus.pipe(
      map((globalStatus) => ({ ...globalStatus.kansa }))
    );
  }
  patchKansa(datum: PDFFolder): void {
    this._GlobalStatus.next({
      ...this._GlobalStatus.getValue(),
      kansa: datum,
    });
  }

  getKaike(): Observable<PDFFolder> {
    return this._GlobalStatus.pipe(
      map((globalStatus) => ({ ...globalStatus.kaikei }))
    );
  }
  patchKaike(datum: PDFFolder): void {
    this._GlobalStatus.next({
      ...this._GlobalStatus.getValue(),
      kaikei: datum,
    });
  }
}
