// Base response type untuk semua API responses
export interface BaseResponse {
  message: string;
  status: string;
}

// Type untuk single item response
export interface SingleResponse<T> extends BaseResponse {
  data: T;
}

// Type untuk list response
export interface ListResponse<T> extends BaseResponse {
  data: T[];
}

// Data models
export interface Hero {
  _id: string;
  title: string;
  buttonUrl: string;
  image: {
    filename: string;
    originalName: string;
    path: string;
    size: number;
    mimetype: string;
  };
}

export interface HomeDescriptions {
  _id: string;
  title: string;
  description: string;
}

export interface Features {
  _id: string;
  title: string;
}
