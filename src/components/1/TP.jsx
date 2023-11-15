import React, { useState, useEffect } from 'react'

export default function TP({ articles }) {
    const [order, setOrder] = useState({ articles })
    const [newArticle, setNewArticle] = useState({ nom: '', quantite: 0, prix: 0 });

    const ajouterArticle = () => {
        setOrder({ articles: [...order.articles, newArticle] });
        setNewArticle({ nom: '', quantite: 0, prix: 0 });

    };
    const supprimerArticle = (index) => {
        const newArticles = [...order.articles];
        newArticles.splice(index, 1);
        setOrder({ articles: newArticles });
    };
    useEffect(() => {
        const intervalId = setInterval(() => {
            document.title = new Date().toLocaleString();
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const toggleAnnulation = (index) => {
        setOrder((prevOrder) => ({...prevOrder,
            articles:
             prevOrder.articles.map((article, i) =>
                i === index ? { ...article, annule: !article.annule } : article
            ),
        }));
    };
    const totale = order.articles
  .filter(article => !article.annule)
  .reduce((acc, article) => acc + article.prix * article.quantite, 0);

    console.log({ newArticle })

    return (
        <div>
            <h2>Order</h2>
            <table >
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Quantité</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {order.articles.map((article, index) => (
                        <tr key={index}>
                            <span onClick={() => toggleAnnulation(index)}
                                style={{ textDecoration: article.annule ? 'line-through' : '' }}

                            ><td>{article.nom}</td>
                                <td>{article.quantite}</td>
                                <td>{article.prix}Dh</td></span>

                            <td>
                                <button onClick={() => supprimerArticle(index)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2>ajouter un nouvel article à la commande</h2>
                <label>Nom:</label>
                <input type="text" value={newArticle.nom} onChange={(e) => setNewArticle({ ...newArticle, nom: e.target.value })} /><br />

                <label>Quantite:</label>
                <input type="number" value={newArticle.quantite} onChange={(e) => setNewArticle({ ...newArticle, quantite: e.target.value })} /><br />

                <label>Prix:</label>
                <input type="number" value={newArticle.prix} onChange={(e) => setNewArticle({ ...newArticle, prix: e.target.value })} /><br />

                <button onClick={ajouterArticle}>ajouter</button>

            </div>
            <div>
                totale:{totale}
            </div>
        </div>
    )
}
