import { Router } from "express";
import { CreateUserController } from "./controllers/User/CreateUserController";
import { ListUserController } from "./controllers/User/ListUserController";
import { UpdateUserController } from "./controllers/User/UpdateUserController";
import { RemoveUserController } from "./controllers/User/RemoveUserController";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { ListCategoryController } from "./controllers/Category/ListCategoryController";
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController";
import { RemoveCategoryController } from "./controllers/Category/RemoveCategoryController";
import { CreateProductController } from "./controllers/Product/CreateProductController";
import { ListProductController } from "./controllers/Product/ListProductController";
import { RemoveProductController } from "./controllers/Product/RemoveProductController";
import { UpdateProductController } from "./controllers/Product/UpdateProductController";
import { CreateSaleController } from "./controllers/Sales/CreateSaleController";
import { ListSaleController } from "./controllers/Sales/ListSaleController";
import { RemoveSaleController } from "./controllers/Sales/RemoveSaleController";
import { UpdateSaleController } from "./controllers/Sales/UpdateSaleController";

const createUserController  = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController = new UpdateUserController();
const removeUserController = new RemoveUserController();

const createCategoryController  = new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const updateCategoryController = new UpdateCategoryController();
const removeCategoryController = new RemoveCategoryController();

const createProductController  = new CreateProductController();
const listProductController = new ListProductController();
const updateProductController = new UpdateProductController();
const removeProductController = new RemoveProductController();

const createSaleController  = new CreateSaleController();
const listSaleController = new ListSaleController();
const updateSaleController = new UpdateSaleController();
const removeSaleController = new RemoveSaleController();


const router = Router();

router.post("/users", createUserController.handle);
router.get("/users", listUserController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:email", removeUserController.handle);

router.post("/categories", createCategoryController.handle);
router.get("/categories", listCategoryController.handle);
router.put("/categories", updateCategoryController.handle);
router.delete("/categories/:id", removeCategoryController.handle);

router.post("/products", createProductController.handle);
router.get("/products", listProductController.handle);
router.put("/products", updateProductController.handle);
router.delete("/products/:id", removeProductController.handle);

router.post("/sales", createSaleController.handle);
router.get("/sales", listSaleController.handle);
router.put("/sales", updateSaleController.handle);
router.delete("/sales/:id", removeSaleController.handle);


export {router}