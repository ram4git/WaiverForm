import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-450">
      <Header />

      <main className="mx-auto lg:px-6">{props.children}</main>

      <Footer />
    </div>
  );
}
