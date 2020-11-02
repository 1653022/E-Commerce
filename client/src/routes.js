import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
// import ProductContainer from './components/Container/ProductContainer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import CartContainer from './components/Container/CartContainer';
import SellerLogin from './pages/SellerLogin/SellerLogin';
import AdminProductPage from './pages/AdminProductPage/AdminProductPage';
import AdminProductActionPage from './pages/AdminProductActionPage/AdminProductActionPage';
import HomePage from './pages/HomePage/HomePage';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/product/:id',
        exact: false,
        main: ({match}) => <ProductDetail match = {match}/>
    },
    {
        path: '/cart',
        exact: false,
        main: ({history}) => <CartContainer history={history}/>
    },
    {
        path: '/admin',
        exact: true,
        main: ({history}) => <SellerLogin history={history}/>
    },
    {
        path: '/admin/product-list',
        exact: false,
        main: () => <AdminProductPage/>
    },
    {
        path: '/admin/product/add',
        exact: false,
        main: ({history}) => <AdminProductActionPage history = {history}/>
    },
    {
        path: '/admin/product/:id/edit',
        exact: false,
        main: ({history, match}) => <AdminProductActionPage history = {history} match = {match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
];

export default routes;