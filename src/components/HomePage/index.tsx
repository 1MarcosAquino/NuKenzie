import Button from '../Button';
import './style.css';
import illustration from '../../../public/Illustration.svg';
import Logo from '../Logo';

const HomePage = ({ action }: { action: (flag: boolean) => void }) => {
    return (
        <main className="home">
            <div className="container">
                <section>
                    <Logo origin="home" />

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
