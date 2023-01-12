import Log from "./constants/Log"

export default class Helpers {
    static log(msg: string, mode: Log = Log.DEBUG): void {
        const data = `[WuolahExtra] ${msg}`
        switch (mode) {
            case Log.DEBUG:
                if (GM_config.get('debug')) {
                    console.debug(data)
                }
                break
            case Log.INFO:
                console.log(data)
                break
        }
    }

    static getPath(url_str: string): string {
        try {
            const url = new URL(url_str)
            const path = url.pathname
            return path
        } catch {
            return url_str // If there is an error the URL is probably the path itself
        }
    }
}
