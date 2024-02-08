const db = require('../models/index');
const userSubscription = require('../models/usersubscription');
const user = require('../models/user');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

exports.ytmusic = async (req, res, next) => {
  try {
    const users = await db.sequelize.models.user.findAll({
      include: [
        {
          model: db.sequelize.models.userSubscription,
          required: true,
          where:{app_id:2,subscribed:'t'}
        }
       
      ],
      

    });

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




exports.yt=async(req,res,next)=>{
    const user=await db.sequelize.models.user.findAll({
        include:[
            {
            model: db.sequelize.models.userSubscription,
            required:true,
            where:{subscribed:'t'}
            }

        ]
    });
    res.json(user);
}