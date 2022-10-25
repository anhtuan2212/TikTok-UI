import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        //Layout là khung của trang web
                        // mặc định sẽ lấy DefaultLayout {trang web đầy đủ các thành phần}

                        let Layout = DefaultLayout;
                        // nếu có layout thì Layout = layout
                        if (route.layout) {
                            // giá trị của route.layout đc quy định ở routers
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            // nếu layout = null thì sẽ cho layout của trang web vào Fragment chỉ giữ lại route.component của DefaultLayout
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
