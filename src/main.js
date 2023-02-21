import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const app = document.querySelector("#app");
const menu=document.querySelector("#menu")
const menuButton=document.querySelector("#menu-button")
menuButton.addEventListener("click",()=>(
    menu.classList.toggle("invisible")
))
import about from "./page/about";
import homepage from "./page/homepage";
import { render, router } from "./lib";
import notFound from "./page/notFound";
import productsPage from "./page/products";
import ProductDetailPage from "./page/ProductDetail";
import myfavorite from "./page/myfavorite";
import myskin from "./page/myskin";

router.on('/', () => render(homepage, app));
router.on('/about', () => render(about, app));
router.on('/products',() => render(productsPage,app));
router.on('/product/:id',({data}) => render(()=>ProductDetailPage(data), app));
router.on('/myfavorite',()=> render(myfavorite,app));
router.on('/myskin',() =>render(myskin,app));
router.notFound(()=>render(notFound, app));

router.resolve();