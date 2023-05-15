import React from 'react'
import { Route, Routes, useNavigate, useNavigation } from 'react-router-dom'
import Dashboard from './lessons/antdAdminPanel/Dashboard'
import AddProductPage from './lessons/antdAdminPanel/AddProductPage'
import ProductListPage from './lessons/antdAdminPanel/ProductListPage'
import { Layout, Menu } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'

function App2() {

    let navigate = useNavigate();

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

                        },
                        
                    ]
                    }
                />

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

export default App2