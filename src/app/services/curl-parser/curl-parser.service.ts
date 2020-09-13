import {Injectable} from '@angular/core';
import yargsParser from 'yargs-parser/browser';
import {Options} from 'yargs-parser';
import {Subject} from "rxjs";


const OPTIONS: Options = {
    alias: {
        "append": "a",
        "cert": "E",
        "config": "K",
        "continue-at": "C",
        "cookie": "b",
        "data": "d",
        "disable": "q",
        "dump-header": "D",
        "fail": "f",
        "form": "F",
        "ftp-port": "P",
        "get": "G",
        "globoff": "g",
        "head": "I",
        "header": "H",
        "http1.0": "0",
        "include": "i",
        "insecure": "k",
        "ipv4": "4",
        "ipv6": "6",
        "junk-session-cookies": "j",
        "list-only": "l",
        "location": "L",
        "manual": "M",
        "max-time": "m",
        "netrc": "n",
        "next": ":",
        "no-buffer": "N",
        "output": "o",
        "progress-bar": "#",
        "proxy": "x",
        "proxy-user": "U",
        "proxytunnel": "p",
        "quote": "Q",
        "range": "r",
        "referer": "e",
        "remote-header-name": "J",
        "remote-name": "O",
        "remote-time": "R",
        "request": "X",
        "show-error": "S",
        "silent": "s",
        "speed-limit": "Y",
        "speed-time": "y",
        "sslv2": "2",
        "sslv3": "3",
        "telnet-option": "t",
        "time-cond": "z",
        "tlsv1": "1",
        "upload-file": "T",
        "use-ascii": "B",
        "user": "u",
        "user-agent": "A",
        "verbose": "v",
        "write-out": "w"
    },
    boolean: [
        "anyauth",
        "append",
        "basic",
        "cert-status",
        "compressed",
        "create-dirs",
        "crlf",
        "digest",
        "disable",
        "disable-eprt",
        "disable-epsv",
        "fail",
        "fail-early",
        "false-start",
        "ftp-create-dirs",
        "ftp-pasv",
        "ftp-pret",
        "ftp-skip-pasv-ip",
        "ftp-ssl-ccc",
        "ftp-ssl-control",
        "get",
        "globoff",
        "head",
        "http1.0",
        "http1.1",
        "http2",
        "http2-prior-knowledge",
        "ignore-content-length",
        "include",
        "insecure",
        "ipv4",
        "ipv6",
        "junk-session-cookies",
        "list-only",
        "location",
        "location-trusted",
        "manual",
        "metalink",
        "negotiate",
        "netrc",
        "netrc-optional",
        "next",
        "no-alpn",
        "no-buffer",
        "no-keepalive",
        "no-npn",
        "no-sessionid",
        "ntlm",
        "ntlm-wb",
        "path-as-is",
        "post301",
        "post302",
        "post303",
        "progress-bar",
        "proxy-anyauth",
        "proxy-basic",
        "proxy-digest",
        "proxy-insecure",
        "proxy-negotiate",
        "proxy-ntlm",
        "proxy-ssl-allow-beast",
        "proxy-tlsv1",
        "proxytunnel",
        "quote",
        "raw",
        "remote-header-name",
        "remote-name",
        "remote-name-all",
        "remote-time",
        "request-target",
        "retry-connrefused",
        "sasl-ir",
        "show-error",
        "silent",
        "socks5-basic",
        "socks5-gssapi",
        "ssl",
        "ssl-reqd",
        "sslv2",
        "sslv3",
        "stderr",
        "suppress-connect-headers",
        "tcp-fastopen",
        "tcp-nodelay",
        "tftp-no-options",
        "tlspassword",
        "tlsv1",
        "tlsv1.0",
        "tlsv1.1",
        "tlsv1.2",
        "tlsv1.3",
        "tr-encoding",
        "trace-time",
        "use-ascii",
        "verbose",
        "xattr"
    ]
};

@Injectable({
    providedIn: 'root'
})
export class CurlParserService {
    curlArgsSubject: Subject<any>;

    constructor() {
        this.curlArgsSubject = new Subject<any>();
    }

    parse(curlCommand: string): void {
        this.curlArgsSubject.next(yargsParser(curlCommand, OPTIONS));
    }
}
