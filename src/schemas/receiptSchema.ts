import joi from 'joi'

export const receiptSchema = joi.object({
    "titulo": joi.string().required(),
    "preparo": joi.string().required(),
    // "ingredientes": joi.array().required(),
    "tempoDePreparo": joi.number().required() || joi.string().required(),
})

