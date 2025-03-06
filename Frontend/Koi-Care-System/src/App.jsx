/* eslint-disable no-unused-vars */
import { useRoutes } from 'react-router-dom'
import path from './constants/path'
import { ToastContainer } from 'react-toastify'
import { DarkModeProvider } from './hooks/DarkModeContext'
import './index.css'
import { lazy, Suspense } from 'react'
import ProtectedRoute from './ProtectedRoute'

const Login = lazy(() => import('./pages/Login/Login'))
const Home = lazy(() => import('./pages/Home/Home'))
const Register = lazy(() => import('./pages/Register/Register'))
const Policy = lazy(() => import('./pages/Policy/Policy'))
const VerifyEmail = lazy(() => import('./pages/VerifyEmail/VerifyEmail'))
const VerifySuccess = lazy(() => import('./pages/Register/Register'))
const Email = lazy(() => import('./pages/RecoveryPassword/Email'))
const OTP = lazy(() => import('./pages/OTP/OTP'))
const ResetPassword = lazy(() => import('./pages/ResetPassword/ResetPassword'))
const Member = lazy(() => import('./pages/Member/Member'))
const Shop = lazy(() => import('./pages/Shop/Shop'))
const Dashboard = lazy(() => import('./pages/Member/Dashboard/Dashboard'))
const MyKoi = lazy(() => import('./pages/Member/MyKoi/MyKoi'))
const KoiDetail = lazy(() => import('./pages/Member/MyKoi/KoiDetail'))
const WaterParameters = lazy(() => import('./pages/Member/WaterParameters/WaterParameters'))
const Reminders = lazy(() => import('./pages/Member/Reminders/Reminders'))
const Recommendations = lazy(() => import('./pages/Member/Recommendations/Recommendations'))
const RecommendationDetail = lazy(() => import('./pages/Member/Recommendations/RecommendationDetail'))
const FoodCalculator = lazy(() => import('./pages/Member/FoodCalculator/FoodCalculator'))
const SaltCalculator = lazy(() => import('./pages/Member/SaltCalculator/SaltCalculator'))
const Statistics = lazy(() => import('./pages/Member/Statistics/Statistics'))
const News = lazy(() => import('./pages/Member/News/News'))
const NewsDetail = lazy(() => import('./pages/Member/News/NewsDetail'))
const MyAccount = lazy(() => import('./pages/Member/MyAccount/MyAccount'))
const Profile = lazy(() => import('./pages/Member/MyAccount/Profile/Profile'))
const About = lazy(() => import('./pages/Member/About/About'))
const MyPond = lazy(() => import('./pages/Member/MyPond/MyPond'))
const MyPondLog = lazy(() => import('./pages/Member/MyPond/MyPondLog'))
const MyPondLogId = lazy(() => import('./pages/Member/MyPond/MyPondLogId'))
const Admin = lazy(() => import('./pages/Admin/Admin'))
const Tag = lazy(() => import('./pages/Shop/Tag/Tag'))
const ShopNews = lazy(() => import('./pages/Shop/News/ShopNews'))
const CreateNews = lazy(() => import('./pages/Shop/News/CreateNews'))
const UpdateNews = lazy(() => import('./pages/Shop/News/UpdateNews'))
const ViewNews = lazy(() => import('./pages/Shop/News/ViewNews'))
const WishList = lazy(() => import('./pages/Member/WishList/WishList'))
const CartList = lazy(() => import('./pages/Member/CartList/CartList'))
const OrderMember = lazy(() => import('./pages/Member/MyAccount/Order/Order'))
const CreateTag = lazy(() => import('./pages/Shop/Tag/CreateTag'))
const UpdateTag = lazy(() => import('./pages/Shop/Tag/UpdateTag'))
const Supplier = lazy(() => import('./pages/Shop/Supplier/Supplier'))
const CreateSupplier = lazy(() => import('./pages/Shop/Supplier/CreateSupplier'))
const UpdateSupplier = lazy(() => import('./pages/Shop/Supplier/UpdateSupplier'))
const Checkout = lazy(() => import('./pages/Member/Recommendations/Checkout'))
const Promotion = lazy(() => import('./pages/Shop/Promotion/Promotion'))
const CreatePromotion = lazy(() => import('./pages/Shop/Promotion/CreatePromotion'))
const UpdatePromotion = lazy(() => import('./pages/Shop/Promotion/UpdatePromotion'))
const Product = lazy(() => import('./pages/Shop/Product/Product'))
const CreateProduct = lazy(() => import('./pages/Shop/Product/CreateProduct'))
const UpdateProduct = lazy(() => import('./pages/Shop/Product/UpdateProduct'))
const Category = lazy(() => import('./pages/Shop/Category/Category'))
const CreateCategory = lazy(() => import('./pages/Shop/Category/CreateCategory'))
const UpdateCategory = lazy(() => import('./pages/Shop/Category/UpdateCategory'))
const ViewProduct = lazy(() => import('./pages/Shop/Product/ViewProduct'))
const Payment = lazy(() => import('./pages/Member/Recommendations/Payment'))
const PromotionAD = lazy(() => import('./pages/Admin/Promotion/Promotion'))
const ProductImage = lazy(() => import('./pages/Shop/ProductImage/ProductImage'))
const CreateImage = lazy(() => import('./pages/Shop/ProductImage/CreateImage'))
const UpdateImage = lazy(() => import('./pages/Shop/ProductImage/UpdateImage'))
const ViewUser = lazy(() => import('./pages/Shop/User/ViewUser'))
const Pricing = lazy(() => import('./components/Pricing/Pricing'))
const PaymentSuccess = lazy(() => import('./pages/Member/Recommendations/PaymentSuccess'))
const PaymentError = lazy(() => import('./pages/Member/Recommendations/PaymentError'))
const ShopAD = lazy(() => import('./pages/Admin/ManageUsers/ShopAD'))
const CustomerAD = lazy(() => import('./pages/Admin/ManageUsers/CustomerAD'))
const ViewUserAD = lazy(() => import('./pages/Admin/ManageUsers/ViewUserAD'))
const MyPondIssue = lazy(() => import('./pages/Member/MyPond/MyPondIssue'))
const UserDetail = lazy(() => import('./pages/Shop/User/UserDetail'))
const OrderShop = lazy(() => import('./pages/Shop/Order/Order'))
const PaymentShop = lazy(() => import('./pages/Shop/Payment/Payment'))
const DashboardShop = lazy(() => import('./pages/Shop/Dashboard/Dashboard'))
const ProfileShop = lazy(() => import('./pages/Shop/ShopAccount/ProfileShop'))
const UpdateUserAD = lazy(() => import('./pages/Admin/ManageUsers/UpdateUserAD'))
const DashboardAD = lazy(() => import('./pages/Admin/DashBoard/DashboardAD'))
const ManageOrder = lazy(() => import('./pages/Admin/ManageReport/ManageOrder'))
const ProductAD = lazy(() => import('./pages/Admin/Product/ProductAD'))
const SupplierAD = lazy(() => import('./pages/Admin/Supplier/SupplierAD'))
const ViewProductAD = lazy(() => import('./pages/Admin/Product/ViewProductAD'))
const UpdateProductAD = lazy(() => import('./pages/Admin/Product/UpdateProductAD'))
const CreateProductAD = lazy(() => import('./pages/Admin/Product/CreateProductAD'))
const CreateSupplierAD = lazy(() => import('./pages/Admin/Supplier/CreateSupplierAD'))
const UpdateSupplierAD = lazy(() => import('./pages/Admin/Supplier/UpdateSupplierAD'))
const ManagePay = lazy(() => import('./pages/Admin/ManageReport/ManagePay'))
const NewsAD = lazy(() => import('./pages/Admin/News/NewsAD'))
const NewsView = lazy(() => import('./pages/Admin/News/NewsView'))
const PracticeKanji = lazy(() => import('./pages/Member/Kanji/PracticeKanji'))
function App() {
  const isAuthenticated = Boolean(localStorage.getItem('token'))

  const routeElements = useRoutes([
    {
      path: path.home,
      element: (
        <Suspense>
          <Home />
        </Suspense>
      )
    },
    {
      path: path.login,
      element: (
        <Suspense>
          <Login />
        </Suspense>
      )
    },
    {
      path: path.register,
      element: (
        <Suspense>
          <Register />
        </Suspense>
      )
    },
    {
      path: path.policy,
      element: (
        <Suspense>
          <Policy />
        </Suspense>
      )
    },
    {
      path: path.verify,
      element: <VerifyEmail />
    },
    {
      path: path.verifySuccess,
      element: <VerifySuccess />
    },
    {
      path: path.email,
      element: <Email />
    },
    {
      path: path.otp,
      element: (
        <Suspense>
          <OTP />
        </Suspense>
      )
    },
    {
      path: path.resetPassword,
      element: (
        <Suspense>
          <ResetPassword />
        </Suspense>
      )
    },
    {
      path: path.member,
      element: (
        <Suspense>
          <Member />
        </Suspense>
      )
    },
    {
      path: path.myAccount,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyAccount />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.profile,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Profile />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.orderMember,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <OrderMember />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboard,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Dashboard />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myKoi,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyKoi />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPond,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyPond />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.waterParameters,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <WaterParameters />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.reminders,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Reminders />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.recommendations,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Recommendations />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.foodCalculator,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <FoodCalculator />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.saltCalculator,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <SaltCalculator />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.statistics,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Statistics />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.news,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <News />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsDetails,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <NewsDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.koiDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <KoiDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.recommendationDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <RecommendationDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.aboutMember,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <About />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondLog,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyPondLog />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Shop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.admin,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Admin />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shopNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ShopNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ViewNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondLogDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyPondLogId />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.tag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Tag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.wishList,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <WishList />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.cartList,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CartList />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.payment,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Payment />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentSuccess,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <PaymentSuccess />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentError,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <PaymentError />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createTag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateTag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateTag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateTag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.supplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Supplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createSupplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateSupplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateSupplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateSupplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.checkout,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Checkout />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondIssue,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <MyPondIssue />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.promotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Promotion />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createPromotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreatePromotion />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updatePromotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdatePromotion />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.product,
      element: <Product />
    },
    {
      path: path.createProduct,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateProduct,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.category,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Category />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createCategory,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateCategory />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateCategory,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateCategory />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewProduct,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ViewProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.promotionAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <PromotionAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.productImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ProductImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewUser,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ViewUser />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.userDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UserDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.pricing,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <Pricing />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shopAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ShopAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.customerAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CustomerAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewUserAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ViewUserAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.orderShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <OrderShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <PaymentShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboardShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <DashboardShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.profileShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ProfileShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateUserAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateUserAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.manageOrder,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ManageOrder />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.productAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.supplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <SupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboardAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <DashboardAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ViewProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createSupplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <CreateSupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateSupplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <UpdateSupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.managePay,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <ManagePay />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <NewsAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsView,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense>
            <NewsView />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.practiceKanji,
      element: (
        <Suspense>
          <PracticeKanji />
        </Suspense>
      )
    }
  ])

  return (
    <>
      <DarkModeProvider>
        {routeElements}

        <ToastContainer />
      </DarkModeProvider>
    </>
  )
}

export default App
