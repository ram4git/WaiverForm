import Header from './header';
import Footer from './footer';

export default function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-blue-450">
      <Header />

      <main className="flex-1 lg:container mx-auto lg:px-6">
        {props.children}
      </main>

      <Footer />
    </div>
  );
}
