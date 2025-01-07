declare module '@inquired-dev/pdf-flatten' {
    const flattener: {
      flatten(buffer: Buffer, options?: any): Promise<any>;
    };
    export default flattener;
  }
  