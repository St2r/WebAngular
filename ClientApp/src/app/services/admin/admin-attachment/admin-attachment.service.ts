import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AttachmentInfo} from '../../../model/attachment';

@Injectable({
  providedIn: 'root'
})
export class AdminAttachmentService {
  private readonly baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public GetAllAttachment(): Promise<AttachmentInfo[]> {
    return;
  }

  public DeleteAttachment(attachmentId: number): Promise<boolean> {
    return;
  }
}
