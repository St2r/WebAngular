import { TestBed } from '@angular/core/testing';

import { AdminAttachmentService } from './admin-attachment.service';

describe('AdminAttachmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminAttachmentService = TestBed.get(AdminAttachmentService);
    expect(service).toBeTruthy();
  });
});
