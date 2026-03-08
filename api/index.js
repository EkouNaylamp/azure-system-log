module.exports = async function (context, req) {
    const { node, level, message } = req.body;

    if (node && level && message) {
        context.res = {
            status: 201,
            body: {
                status: `Log de ${node} procesado exitosamente`,
                receivedLevel: level,
                timestamp: new Date().toISOString()
            }
        };
    } else {
        context.res = {
            status: 400,
            body: "Por favor, envía el objeto JSON completo (node, level, message)."
        };
    }
};
