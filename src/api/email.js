export default function handler(req,res)
{
    const email = process.env.EMAIL;
    const assunto = 'Orçamento - Desenvolvimento de Software';
    const mensagem = 'Olá! Vim pelo site e quero saber mais.';
    const destino = `mailto:${email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(mensagem)}`;
    res.redirect(destino);
}