import { router } from "../trpc";
import { eventRouter } from "./event";
import {deleteRouter} from "@/server/routes/delete";


export const appRouter = router({
  event: eventRouter,
  remove: deleteRouter
});

export type AppRouter = typeof appRouter;
