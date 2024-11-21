export class CookieService {
  public static getCookie(name: string): string | null | undefined {
    return useCookie(name).value
  }

  public static setCookie(name: string, value: string,) {
    useCookie(name).value = value
  }

  public static deleteCookie(name: string) {
    useCookie(name).value = null
  }
}