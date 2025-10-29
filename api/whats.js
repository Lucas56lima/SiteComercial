export default function handler(req,res)
{
    const numero = process.env.WHATSAPP_NUMBER;
    const mensagem = 'Olá! Vim pelo site e quero saber mais.';
    const destino = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    res.redirect(destino);
}