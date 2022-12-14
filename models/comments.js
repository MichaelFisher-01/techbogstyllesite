const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		comment: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		commentCreator: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		post_id: {
			type: DataTypes.INTEGER,
			references: {
				model: 'userPosts',
				key: 'id',
			},
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		modelName: 'comments',
	}
);

module.exports = Comments;
