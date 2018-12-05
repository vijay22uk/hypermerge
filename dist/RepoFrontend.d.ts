import Queue from "./Queue";
import MapSet from "./MapSet";
import { ToBackendRepoMsg, ToFrontendRepoMsg } from "./RepoMsg";
import Handle from "./Handle";
import { ChangeFn } from "automerge/frontend";
import { DocFrontend } from "./DocFrontend";
import { Clock } from "./Clock";
export declare class RepoFrontend {
    toBackend: Queue<ToBackendRepoMsg>;
    docs: Map<string, DocFrontend<any>>;
    readFiles: MapSet<string, (data: Uint8Array) => void>;
    file?: Uint8Array;
    create: (init?: any) => string;
    change: <T>(id: string, fn: ChangeFn<T>) => void;
    merge: (id: string, target: string) => void;
    writeFile: <T>(data: Uint8Array) => string;
    readFile: <T>(id: string, cb: (data: Uint8Array) => void) => void;
    fork: (id: string) => string;
    follow: (id: string, target: string) => void;
    watch: <T>(id: string, cb: (val: T, clock?: Clock | undefined, index?: number | undefined) => void) => Handle<T>;
    doc: <T>(id: string, cb?: ((val: T, clock?: Clock | undefined) => void) | undefined) => Promise<T>;
    open: <T>(id: string) => Handle<T>;
    debug(id: string): void;
    private openDocFrontend;
    subscribe: (subscriber: (message: ToBackendRepoMsg) => void) => void;
    receive: (msg: ToFrontendRepoMsg) => void;
}