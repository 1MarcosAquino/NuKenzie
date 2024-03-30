import Titles from '../Titles';
import Button from '../Button';
import './style.css';
import illustration from '../../../public/Illustration.svg';

const HomePage = ({ action }: { action: (flag: boolean) => void }) => {
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
                        text="Iniciar"
                        click={() => action(false)}
                        className="button"
                    />
                </section>
                <aside>
                    <img src={illustration} alt="illustration" />
                </aside>
            </div>
        </main>
    );
};

export default HomePage;
