# Studio Aura - Landing Page Profissional

Uma landing page premium para Studio Aura - Design de Interiores & Arquitetura, desenvolvida com **HTML5**, **CSS3** e **JavaScript Vanilla**.

## ✨ Características

- ✅ **Design System Completo** - Baseado em cores, tipografia e layout precisos
- ✅ **Responsivo 100%** - Desktop, tablet e mobile otimizados
- ✅ **Animações Suaves** - Parallax, fade-ins e transições elegantes
- ✅ **Performance Otimizada** - Lazy loading de videos e imagens
- ✅ **Acessibilidade** - WCAG compliant com navegação por teclado
- ✅ **Mobile-First** - Menu hamburger automático em telas pequenas
- ✅ **SEO-Friendly** - Meta tags e estrutura semântica
- ✅ **Sem Dependências Externas** - Apenas CSS e JavaScript vanilla

## 📋 Seções Incluídas

1. **Hero Section** - Video de fundo imersivo com CTA
2. **Seção Processo** - 3 etapas do método com video
3. **Portfólio** - Grid asimétrico com 7 projetos
4. **Sobre** - Narrativa da fundadora
5. **Depoimentos** - 3 cards com avaliações
6. **Formulário de Contato** - Validação integrada
7. **WhatsApp Flutuante** - Botão de contato direto
8. **Footer** - Links sociais e informações

## 🎨 Design System

### Paleta de Cores
```css
--background: #131313         /* Obsidian principal */
--primary-dark: #c5a059       /* Ouro/Brass */
--on-surface: #e5e2e1         /* Off-white */
--on-surface-variant: #d1c5b4 /* Cinza claro */
```

### Tipografia
- **Headlines**: Playfair Display (elegante, editorial)
- **Body**: Montserrat (limpo, moderno)
- **Labels**: Montserrat uppercase com letter-spacing

### Espaçamento
- Container Max: 1440px
- Gutter: 32px
- Margin Desktop: 80px
- Section Gap: 160px

## 📁 Estrutura de Pastas

```
Estudio Design/
├── index.html                    # HTML principal
├── style.css                     # Estilos completos
├── script.js                     # Funcionalidades JS
├── DESIGN.md                     # Design system (referência)
├── studio_aura_project_brief_prd.md  # PRD (referência)
└── src/
    └── assets/
        ├── interior-dark-video.mp4    # Hero video
        ├── video-camadas.mp4          # Processo video
        ├── projeto-1.jpg              # Portfolio images
        ├── projeto-2.jpg
        ├── projeto-3.jpg
        ├── projeto-4.jpg
        ├── projeto-5.jpg
        ├── projeto-6.jpg
        ├── projeto-7.jpg
        └── marina.jpg                 # Founder image
```

## 🚀 Como Usar

### 1. Setup Local
```bash
# Clone ou copie os arquivos
cd "Estudio Design"

# Abra no navegador (sem servidor necessário)
# Ou use um live server para melhor performance:
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 2. Customizar Conteúdo

#### Trocar Nome/Logo
No `index.html`, linha 42:
```html
<div class="logo">
    <h1>Studio Aura</h1>
</div>
```

#### Atualizar Números de Contato
- WhatsApp (linha 236): `https://wa.me/5511999999999`
- Telefone (footer, linha 268): `+55 (11) 9999-9999`
- Email (footer, linha 267): `hello@studiareura.com`

#### Mudar Cores
No `style.css`, nas CSS variables (`:root`):
```css
--primary-dark: #c5a059;  /* Mude para sua cor */
--background: #131313;    /* Etc */
```

#### Adicionar/Remover Projetos
No `index.html`, adicione novos `.gallery-item`:
```html
<div class="gallery-item">
    <img src="src/assets/projeto-8.jpg" alt="Novo Projeto">
    <div class="gallery-overlay">
        <h3>Título do Projeto</h3>
        <p>Local</p>
    </div>
</div>
```

### 3. Integrar Backend

#### Formulário de Contato
No `script.js`, substitua a função `sendFormToBackend`:
```javascript
function sendFormToBackend(formData) {
    fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => showNotification('Enviado com sucesso!', 'success'))
    .catch(error => showNotification('Erro ao enviar', 'error'));
}
```

#### Google Analytics
Adicione no `<head>` do HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');
</script>
```

## 📱 Breakpoints Responsivos

- **Desktop**: 1440px (padrão)
- **Tablet**: até 768px (8 colunas grid)
- **Mobile**: até 480px (4 colunas grid)

## ⚡ Performance

### Otimizações Incluídas
- Lazy loading de videos
- Intersection Observer para animações
- Prefetching de recursos
- CSS minificado e organizado
- Sem framework externo
- Imagens otimizadas (use WebP para produção)

### Sugestões Adicionais
1. **Compressar Videos**
```bash
ffmpeg -i video.mp4 -c:v libx265 -crf 28 video-compressed.mp4
```

2. **Converter Imagens para WebP**
```bash
cwebp -q 80 imagem.jpg -o imagem.webp
```

3. **Minificar CSS/JS**
- Use Terser para JS
- Use CSSNano para CSS

## 🔧 Funcionalidades JavaScript

- ✅ Menu mobile com hamburger
- ✅ Scroll parallax
- ✅ Animações ao scroll (Intersection Observer)
- ✅ Validação de formulário
- ✅ Smooth scroll
- ✅ Active nav link highlighting
- ✅ Notificações toast
- ✅ Page visibility API
- ✅ Konami code easter egg

## 🎯 Métricas de Sucesso

- **Page Load**: < 2s
- **Core Web Vitals**: Green
- **Mobile Lighthouse**: > 90
- **Acessibilidade**: 100%

## 📝 Próximos Passos

1. [ ] Adicionar SSL/HTTPS
2. [ ] Integrar CMS
3. [ ] Setup de analytics
4. [ ] Testes A/B no CTA
5. [ ] Otimizar imagens (WebP)
6. [ ] Adicionar meta tags Open Graph
7. [ ] Setup de email marketing
8. [ ] Monitoramento de performance

## 📞 Suporte

Para customizações:
1. Consulte `DESIGN.md` para o sistema de design
2. Consulte `studio_aura_project_brief_prd.md` para o PRD
3. Teste em múltiplos navegadores e dispositivos

## 📄 Licença

Este projeto é desenvolvido especificamente para Studio Aura. Todos os direitos reservados © 2024.

---

**Desenvolvido com ❤️ para Studio Aura**