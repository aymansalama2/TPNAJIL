import React, { useState, useEffect } from 'react';
import "./NAJILTP.css"
const defaultArticle = { nom: '', quantite: '', prix: '' };

export default function NAJILTP({ articles }) {
  const [order, setOrder] = useState({ articles });
  const [nouvelArticle, setNouvelArticle] = useState(defaultArticle);

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = new Date().toLocaleString();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const ajouterArticle = () => {
    if (!nouvelArticle.nom || nouvelArticle.quantite === '' || nouvelArticle.prix === '') {
      alert("Veuillez remplir tous les champs de l'article.");
      return;
    }

    setOrder((prev) => ({
      ...prev,
      articles: [...prev.articles, { ...nouvelArticle }],
    }));

    setNouvelArticle(defaultArticle);
  };

  const supprimerArticle = (index) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      articles: prevOrder.articles.filter((_, i) => i !== index),
    }));
  };


  const toggleAnnulation = (index) => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      articles: prevOrder.articles.map((article, i) =>
        i === index ? { ...article, annule: !article.annule } : article
      ),
    }));
  };
  const totale = order.articles
  .filter(article => !article.annule)
  .reduce((acc, article) => acc + article.prix * article.quantite, 0);

  return (
    <div className="order-container">
      <h2>Order</h2>
      <table className="styled-table">
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
            <tr key={index}
                 onClick={() => toggleAnnulation(index)}
                style={{ textDecoration: article.annule ? 'line-through' : 'none' }}>
              <td>{article.nom}</td>
              <td>{article.quantite}</td>
              <td>{article.prix}Dh</td>
              <td>
                <button onClick={() => supprimerArticle(index)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="add-article-container">
        <h1>Ajouter un nouvel article à la commande</h1>
        <label>Nom:</label>
        <input
          type="text"
          value={nouvelArticle.nom}
          onChange={(e) => setNouvelArticle({ ...nouvelArticle, nom: e.target.value })}
        />
        <label>Quantité:</label>
        <input
          type="number"
          value={nouvelArticle.quantite}
          onChange={(e) =>
            setNouvelArticle({
              ...nouvelArticle,
              quantite: parseInt(e.target.value, 10),
            })
          }
        />
        <label>Prix:</label>
        <input
          type="number"
          value={nouvelArticle.prix}
          onChange={(e) =>
            setNouvelArticle({
              ...nouvelArticle,
              prix: parseFloat(e.target.value),
            })
          }
        />
        <button onClick={ajouterArticle}>Ajouter à la commande</button>
      </div>

      <div className="total-container">
        <span>Totale: {totale} Dh</span>
      </div>
    </div>
  );
}
