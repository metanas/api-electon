exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_group').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_group').insert([
        {
          id: 1,
          name: 'super user',
          permission: JSON.stringify({
            access: ["Pdf", "Society", "society Info", "Building", "Building Info", "Goods", "good Info", "Client", "client Info", "Payment", "Users", "User Group", "Good Types", "Dashboard"],
            modify: ["Ajouter Societe", "Modifier Societe", "Supprimer Societe", "Ajouter Immeuble", "Modifier Immeuble", "Supprimer Immeuble", "Ajouter Propriété", "Modifier Propriété", "Supprimer Propriété", "Ajouter Client", "Modifier Client", "Supprimer Client", "Imprimer Facture", "Payer Facture", "Ajouter Contrat", "Annuler Contrat", "Ajouter User", "Modifier User", "Supprimer User", "Ajouter Group", "Modifier Group", "Supprimer Group", "Ajouter Type", "Modifier Type", "Supprimer Type"]
          })
        },
      ]);
    });
};
