module Fayde {
    export class AjaxJsonResult {
        private xmlhttp: XMLHttpRequest;
        constructor(xmlhttp: XMLHttpRequest) {
            this.xmlhttp = xmlhttp;
        }
        CreateJson(): any {
            var data = this.xmlhttp.responseText;
            if (!data)
                return null;
            
            if ((<any>window).JSON && JSON.parse) {
                try {
                    return JSON.parse(data);
                } catch (err) {
                }
            }

            try {
                return new Function("return " + data)();
            } catch (err) {
                throw new InvalidJsonException(data, err);
            }
        }
        GetHeader(name: string): string {
            return this.xmlhttp.getResponseHeader(name);
        }
    }

    export class AjaxJsonRequest {
        private xmlhttp: XMLHttpRequest = null;

        constructor(public OnSuccess: (result: AjaxJsonResult) => void, public OnError: (error: string) => void) { }

        Get(url: string, query?: string) {
            this._PrepareRequest();
            var fullUrl = url;
            if (query)
                fullUrl += "?" + query;
            this.xmlhttp.open("GET", fullUrl, true);
            this.xmlhttp.send();
        }
        Post(url: string, query: string, data: any) {
            this._PrepareRequest();
            var fullUrl: string = url;
            if (query)
                fullUrl += "?" + query;
            this.xmlhttp.open("POST", fullUrl, true);
            this.xmlhttp.send(data);
        }
        Cancel() {
            this.xmlhttp.abort();
        }

        private _PrepareRequest() {
            var xmlhttp: XMLHttpRequest = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => this._HandleStateChange();
            this.xmlhttp = xmlhttp;
        }
        private _HandleStateChange() {
            if (this.xmlhttp.readyState === 4) {
                var req = this.xmlhttp;
                this.xmlhttp = undefined;
                if (req.status === 200) {
                    this.OnSuccess(new AjaxJsonResult(req));
                } else {
                    this.OnError("Unsuccessful request: " + req.status);
                }
            }
        }
    }
}