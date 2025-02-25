import Book from '../models/Book';

const books = [
    
new Book(1,
        "https://images-na.ssl-images-amazon.com/images/I/41k0Z+3tk+L._SX372_BO1,204,203,200_.jpg",
        "Algoritmos - Teoria e Prática",
        "Português",
        "Este livro apresenta um texto abrangente sobre o moderno estudo de algoritmos para computadores. É uma obra clássica, cuja primeira edição tornou-se amplamente adotada nas melhores universidades em todo o mundo, bem como padrão de referência para profissionais da área. Nesta terceira edição, totalmente revista e ampliada, as mudanças são extensivas e incluem novos capítulos, exercícios e problemas; revisão de pseudocódigos e um estilo de redação mais claro.A edição brasileira conta ainda com nova tradução e revisão técnica do Prof. Arnaldo Mandel, do Departamento de Ciência da Computação do Instituto de Matemática e Estatística da Universidade de São Paulo. Elaborado para ser ao mesmo tempo versátil e completo, o livro atende alunos dos cursos de graduação e pós-graduação em algoritmos ou estruturas de dados.",
        944,
        ["Thomas H. Cormen", "Charles Eric Leiserson", "Ronald Rivest", "Clifford Stein"],
        ["algoritmos", "data structures"]
    ),
new Book(
        2,
         "https://images-na.ssl-images-amazon.com/images/I/615+CX+YMpL._SX447_BO1,204,203,200_.jpg",
         "Inteligência artificial",
         "Português",
         "Número um no seu campo, este livro oferece a mais abrangente introdução à teoria e prática da inteligência artificial, sendo adotado por mais de 600 universidades de 60 países. Nos últimos cinquenta anos de pesquisas sobre IA e nos dois últimos milênios de trabalhos relacionados a esse tema, muitas ideias surgiram e a maneira como se pensa esta área está em constante evolução. Nesta tradução da terceira edição, foram consideradas as mais importantes aplicações de tecnologia de IA e seus marcos algoritmos, como a solução do jogo de damas, colocando a obra num patamar teórico bastante consistente. Inteligência Artificial destina-se, principalmente, ao uso em cursos de graduação ou de extensão. Também pode ser usado em cursos de pós-graduação ou para quaisquer estudantes que tenham familiaridade com os conceitos básicos de ciência da computação.",
         1016,
         ["Peter Norvig"],
         ["inteligência artificial"]
        ),
new Book(
         3,
         "https://images-na.ssl-images-amazon.com/images/I/51G+fMi6icL._SX369_BO1,204,203,200_.jpg",
         "Engenharia de Software",
         "Português",
         "A 10ª edição de Engenharia de software foi extensivamente atualizada para refletir a adoção crescente de métodos ágeis na engenharia de software. Um dos destaques da nova edição é o acréscimo de conteúdo sobre a metodologia do Scrum. A divisão em quatro partes do livro foi significativamente reformulada para acomodar novos capítulos sobre engenharia de resiliência, engenharia de sistemas e sistemas de sistemas. Além disso, capítulos sobre tópicos como confiança, segurança e proteção foram completamente reorganizados. Todas essas mudanças se justificam por compreenderem questões essenciais para a engenharia de software moderna ― gerenciamento da complexidade, integração da agilidade a outros métodos e garantia de que os sistemas sejam seguros e resilientes. Obra de referência para estudantes de ciência da computação, engenharia da computação e sistemas de informação, e para qualquer profissional que deseje atualizar seus conhecimentos sobre reúso de software, arquitetura de projetos, confiabilidade e segurança e engenharia de sistemas.",
         768,
         ["Ian Sommerville"],
         ["software", "teoria"]
        ),
new Book(
         4,
         "https://images-na.ssl-images-amazon.com/images/I/51TeqaTZDwL._SX369_BO1,204,203,200_.jpg",
         "Sistemas Operacionais Modernos",
         "Português",
         "A 4ª edição de Sistemas operacionais modernos foi extensamente revisada e atualizada para incorporar os últimos desenvolvimentos em tecnologias de sistemas operacionais. Além de tratar do sistema UNIX, o livro traz como novidade a abordagem do Windows 8 e 8.1, assim como um foco maior em Linux e a introdução da plataforma Android.",
         864,
         ["Andrew S. Tanenbaum"],
         ["sistemas operacionais", "teoria"]
        ),
new Book(
         5,
         "https://images-na.ssl-images-amazon.com/images/I/51xtndT1lAL._SX346_BO1,204,203,200_.jpg",
         "Engenharia de Software: Uma Abordagem Profissional",
         "Português",
         "Com mais de três décadas de liderança de mercado, Engenharia de Software chega à sua 8ª edição como o mais abrangente guia sobre essa importante área.Totalmente revisada e reestruturada, esta nova edição foi amplamente atualizada para incluir os novos tópicos da “engenharia do século 21”. Capítulos inéditos abordam a segurança de software e os desafios específicos ao desenvolvimento para aplicativos móveis. Conteúdos novos também foram incluídos em capítulos existentes, e caixas de texto informativas e conteúdos auxiliares foram expandidos, deixando este guia ainda mais prático para uso em sala de aula e em estudos autodidatas.",
         968,
        ["Roger S. Pressman","Bruce R. Maxim"],
         ["software", "teoria"]
        ),
new Book(
         6,
         "https://images-na.ssl-images-amazon.com/images/I/51aSAx1OXML._SX382_BO1,204,203,200_.jpg",
         "Introdução á teoria da computação",
         "Português",
         "Esta obra apresenta a teoria da computação por meio de teoremas e provas, sempre com a preocupação do autor em mostrar a intuição por trás de cada resultado e em amenizar a leitura destas últimas, apresentando, para cada teorema, uma ideia da prova. Com este livro, através da prática de resolução de problemas, os alunos, nos exercícios, revisarão definições e conceitos da área e, nos problemas, irão se deparar com atividades que exigem maior engenhosidade. Os três últimos capítulos são novos, e esta 2ª edição incorpora as sugestões de professores e alunos enviadas ao autor ao longo dos anos. Contém material para mais de um semestre de curso, propiciando flexibilidade para escolha de tópicos a serem mais ou menos explorados.",
         488,
         ["Michael Sipser"],
         ["computação", "teoria"]
        ),
]

export default books;