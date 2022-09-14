class HttpResponse {

    constructor(private data: any, private code: number, private success: boolean) {
        this.data = data;
        this.code = code
        this.success = success
    }

    static success(data?: any) {
        return new HttpResponse(data, 200, true)
    }

    static fail(msg: string) {
        return new HttpResponse(msg, 500, false)
    }

    get $data(): any {
        return this.data;
    }

    set $data(value: any) {
        this.data = value;
    }

    get $code(): number {
        return this.code;
    }

    set $code(value: number) {
        this.code = value;
    }
}

export {HttpResponse}