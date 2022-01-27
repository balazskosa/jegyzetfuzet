import { TestBed } from '@angular/core/testing';

import { NoteFirebaseService } from './note-firebase.service';

describe('NoteFirebaseService', () => {
  let service: NoteFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
