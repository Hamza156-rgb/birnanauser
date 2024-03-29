import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'welcome1',
    loadChildren: () => import('./welcome1/welcome1.module').then(m => m.Welcome1PageModule)
  },
  {
    path: 'welcome2',
    loadChildren: () => import('./welcome2/welcome2.module').then(m => m.Welcome2PageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPagePageModule)
  },
  {
    path: 'stores',
    loadChildren: () => import('./stores/stores.module').then(m => m.StoresPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'item-details',
    loadChildren: () => import('./item-details/item-details.module').then(m => m.ItemDetailsPageModule)
  },
  {
    path: 'shopping-cart',
    loadChildren: () => import('./shopping-cart/shopping-cart.module').then(m => m.ShoppingCartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'order-process',
    loadChildren: () => import('./order-process/order-process.module').then(m => m.OrderProcessPageModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('./order-tracking/order-tracking.module').then(m => m.OrderTrackingPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then(m => m.FilterPageModule)
  },

  {
    path: 'orders',
    loadChildren: () => import('./profile/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./profile/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'promo-codes',
    loadChildren: () => import('./profile/promo/promo.module').then(m => m.PromoPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./profile/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./profile/about/about.module').then(m => m.AboutPageModule)
  },

  {
    path: 'notification',
    loadChildren: () => import('./profile/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'add-payment',
    loadChildren: () => import('./profile/add-payment/add-payment.module').then(m => m.AddPaymentPageModule)
  },

  {
    path: 'add-payment-card',
    loadChildren: () => import('./profile/add-payment-card/add-payment-card.module').then(m => m.AddPaymentCardPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./success/success.module').then( m => m.SuccessPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
