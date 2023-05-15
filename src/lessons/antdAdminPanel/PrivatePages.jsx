import React, { useContext } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { Button, Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import Dashboard from './Dashboard';
import ProductListPage from './ProductListPage';
import AddProductPage from './AddProductPage';
import { LoginContext } from './LoginContext';




function PrivatePages() {
    let navigate = useNavigate();

    const {loginStatus, setloginStatus } = useContext(LoginContext);

    const signout = () => {
        setloginStatus(false);
        localStorage.setItem('login',false);
    }

    return (<>

        <Layout>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: 1,
                            label: 'Dashboard',
                            onClick: () => navigate('/')
                        },
                        {
                            key: 2,
                            label: 'Products',
                            onClick: () => navigate('/products')

                        }

                    ]
                    }
                />
                <Button onClick={signout}>Sign Out</Button>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                <div style={{ padding: 24, minHeight: 380 }}>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/addproduct' element={<AddProductPage />} />
                        <Route path='/products' element={<ProductListPage />} />
                    </Routes>

                </div>
            </Content>
            <Footer>

            </Footer>

        </Layout>
    </>)
}

export default PrivatePages