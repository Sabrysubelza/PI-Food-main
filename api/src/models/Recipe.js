const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    // ID: *
		recipe_id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
		// Nombre *
		recipe_name: {
			type: DataTypes.STRING,
			allowNull: false,
            unique: true,
		},
		// Resumen del plato *
		dish_description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		// Puntuación
		score: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		// Nivel de "comida saludable"
		healthy_food_level: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		// Paso a paso
		step_by_step: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		image: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
		// Recipientes creados en la base de datos
		created_in_db: {
			type: DataTypes.BOOLEAN,
			defaultValue: true,
			allowNull: false,
		},
	});
};
