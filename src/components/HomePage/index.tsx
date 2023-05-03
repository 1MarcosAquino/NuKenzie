import Titles from '../Titles';
import Button from '../Button';
import './style.css';

interface iHomePageProps {
    setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

const HomePage = ({ setHome }: iHomePageProps) => {
    return (
        <main className="home">
            <div className="container">
                <section>
                    <Titles type="h1" classTitle="title--1" />
                    <h1 className="title--1"></h1>

                    <h2 className="title--0">
                        Centralize o controle das suas finanças
                    </h2>
                    <h3 className="title--5">de forma rápida e segura</h3>

                    <Button
                        string="Iniciar"
                        onClick={() => setHome(false)}
                        classBtn="button"
                    />
                </section>
                <aside>
                    <img
                        src="../../../public/Illustration.svg"
                        alt="illustration"
                    />
                </aside>
            </div>
        </main>
    );
};

export default HomePage;
