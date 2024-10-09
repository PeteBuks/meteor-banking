import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
   const loggedIn = {firstName: "Peter"}

  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                type= 'greeting'
                title= 'Welcome'
                user= {loggedIn?.firstName || 'Guest'}
                subtext= 'Access and Manage Account transactions' />

                <TotalBalanceBox 
                    accounts={[]}
                    totalBanks={3}
                    totalCurrentBalance={1250.35}
                />
            </header>
        </div>
    </section>
    )
};

export default Home;
