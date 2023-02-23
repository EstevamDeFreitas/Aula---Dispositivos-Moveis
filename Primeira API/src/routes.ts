import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { RemoveUserController } from "./controllers/RemoveUserController";

const createUserController  = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();

const router = Router();

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:email", removeUserController.handle);

export {router}