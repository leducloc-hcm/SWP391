/* eslint-disable no-unused-vars */
import { lazy, Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import path from './constants/path'
import { DarkModeProvider } from './hooks/DarkModeContext'
import './index.css'
import ProtectedRoute from './ProtectedRoute'
import Loading from './components/Loading'
import Quiz from './pages/Member/Quiz/Quiz'

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
        <Suspense fallback={<Loading />}>
          <Home />
        </Suspense>
      )
    },
    {
      path: path.login,
      element: (
        <Suspense fallback={<Loading />}>
          <Login />
        </Suspense>
      )
    },
    {
      path: path.register,
      element: (
        <Suspense fallback={<Loading />}>
          <Register />
        </Suspense>
      )
    },
    {
      path: path.policy,
      element: (
        <Suspense fallback={<Loading />}>
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
        <Suspense fallback={<Loading />}>
          <OTP />
        </Suspense>
      )
    },
    {
      path: path.resetPassword,
      element: (
        <Suspense fallback={<Loading />}>
          <ResetPassword />
        </Suspense>
      )
    },
    {
      path: path.member,
      element: (
        <Suspense fallback={<Loading />}>
          <Member />
        </Suspense>
      )
    },
    {
      path: path.myAccount,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyAccount />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.profile,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Profile />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.orderMember,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <OrderMember />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboard,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myKoi,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyKoi />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPond,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyPond />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.waterParameters,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <WaterParameters />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.reminders,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Reminders />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.recommendations,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Recommendations />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.foodCalculator,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <FoodCalculator />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.saltCalculator,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <SaltCalculator />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.statistics,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Statistics />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.news,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <News />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsDetails,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <NewsDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.koiDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <KoiDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.recommendationDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <RecommendationDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.aboutMember,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondLog,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyPondLog />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Shop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.admin,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Admin />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shopNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ShopNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewNews,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ViewNews />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondLogDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyPondLogId />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.tag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Tag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.wishList,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <WishList />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.cartList,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CartList />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.payment,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Payment />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentSuccess,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <PaymentSuccess />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentError,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <PaymentError />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createTag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateTag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateTag,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateTag />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.supplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Supplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createSupplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateSupplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateSupplier,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateSupplier />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.checkout,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Checkout />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.myPondIssue,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <MyPondIssue />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.promotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Promotion />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createPromotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreatePromotion />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updatePromotion,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
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
          <Suspense fallback={<Loading />}>
            <CreateProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateProduct,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.category,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Category />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createCategory,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateCategory />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateCategory,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateCategory />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewProduct,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ViewProduct />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.promotionAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <PromotionAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.productImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ProductImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateImage,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateImage />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewUser,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ViewUser />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.userDetail,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UserDetail />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.pricing,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <Pricing />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.shopAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ShopAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.customerAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CustomerAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewUserAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ViewUserAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.orderShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <OrderShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.paymentShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <PaymentShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboardShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <DashboardShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.profileShop,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ProfileShop />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateUserAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateUserAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.manageOrder,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ManageOrder />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.productAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.supplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <SupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.dashboardAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <DashboardAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.viewProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ViewProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createProductAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateProductAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.createSupplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <CreateSupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.updateSupplierAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <UpdateSupplierAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.managePay,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <ManagePay />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsAD,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <NewsAD />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.newsView,
      element: (
        <ProtectedRoute isAuthenticated={isAuthenticated}>
          <Suspense fallback={<Loading />}>
            <NewsView />
          </Suspense>
        </ProtectedRoute>
      )
    },
    {
      path: path.practiceKanji,
      element: (
        <Suspense fallback={<Loading />}>
          <PracticeKanji />
        </Suspense>
      )
    },
    {
      path: path.quiz,
      element: (
        <Suspense fallback={<Loading />}>
          <Quiz />
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
