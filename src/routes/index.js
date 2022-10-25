//Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//public routes
// định tuyến đường dẫn gọi các thành phần trang web {phần công khai}
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly }, //khi được gọi đến đường dẫn này . trang web sẽ lấy layout riêng {layout HeaderOnly} thông qua lọc ở App.js
    { path: '/search', component: Search, layout: null },
];
// định tuyến đường dẫn gọi các thành phần trang web {phần chỉ sử dụng đc khi có quyền truy cập}
const privateRoutes = [];
export { privateRoutes, publicRoutes };
