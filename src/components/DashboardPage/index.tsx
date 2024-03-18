import { useState } from 'react';
import Form from '../Form';
import EmptyElement from '../EmptyElement';
import TotalValue from '../TotalValue';
import FinancialSummary from '../FinancialSummary';
import Header from '../Header';
import Titles from '../Titles';

import Button from '../Button';
// import Titles from '../Titles';

import './style.css';

interface iDashboardProps {
    setHome: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface iValues {
    id: number;
    description: string;
    value: number;
    valueType: string;
}

const Dashboard = ({ setHome }: iDashboardProps) => {
    const [values, setValues] = useState<iValues[]>([]);

    return (
        <>
            <Header>
                <div className="container">
                    <Titles type={'h1'} origin="title__dashboard" />
                    <Button
                        click={() => setHome(true)}
                        text="Inicio"
                        className="logout"
                    />
                </div>
            </Header>
            <main className="dashboard container">
                <section>
                    <Form values={values} setValues={setValues} />
                    {values.length > 0 && <TotalValue values={values} />}
                </section>

                <aside>
                    {values.length > 0 ? (
                        <>
                            <h2 className="title--4">Resumo financeiro</h2>

                            <FinancialSummary
                                values={values}
                                setValues={setValues}
                            />
                        </>
                    ) : (
                        <>
                            <Titles
                                type="h2"
                                classTitle="title--4"
                                text="Resumo financeiro"
                            />

                            <Titles
                                type="h3"
                                classTitle="title--3"
                                text="Você ainda não possui nenhum lançamento"
                            />
                            <EmptyElement />
                            <EmptyElement />
                            <EmptyElement />
                        </>
                    )}
                </aside>
            </main>
        </>
    );
};

export default Dashboard;
