import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './Styles';
import Card from '../../components/Card/Index';

function Anuncios() {
  const vagas_mockadas = [
    {
      id: 1,
      nomeVaga: 'Desenvolvedor(a) Java Júnior',
      descricaoVaga: 'Desenvolvimento de APIs REST com Spring Boot. Versionamento com Git e testes unitários.',
      telefone: '(11) 98888-1111'
    },
    {
      id: 2,
      nomeVaga: 'Analista de Suporte Técnico',
      descricaoVaga: 'Atendimento a usuários, manutenção de redes e configuração de estações de trabalho.',
      telefone: '(11) 97777-2222'
    },
    {
      id: 3,
      nomeVaga: 'Estágio em Ciência de Dados',
      descricaoVaga: 'Suporte em análises com Python e SQL. Conhecimentos em Pandas e Jupyter são diferenciais.',
      telefone: '(11) 96666-3333'
    },
    {
      id: 4,
      nomeVaga: 'DevOps Engineer',
      descricaoVaga: 'Infraestrutura como código com Terraform, CI/CD com GitHub Actions e Docker.',
      telefone: '(21) 95555-4444'
    },
    {
      id: 5,
      nomeVaga: 'Desenvolvedor(a) Front-end React',
      descricaoVaga: 'Construção de interfaces responsivas com React e integração com APIs REST.',
      telefone: '(19) 94444-5555'
    },
    {
      id: 6,
      nomeVaga: 'Analista de QA',
      descricaoVaga: 'Elaboração de planos de teste, testes automatizados com Cypress e manuais em aplicações web.',
      telefone: '(31) 93333-6666'
    },
    {
      id: 7,
      nomeVaga: 'Product Owner (PO)',
      descricaoVaga: 'Gestão de backlog, histórias de usuário e facilitação de cerimônias ágeis.',
      telefone: '(47) 92222-7777'
    },
    {
      id: 8,
      nomeVaga: 'Engenheiro(a) de Dados',
      descricaoVaga: 'Construção de pipelines de dados, ETL e integração com sistemas distribuídos.',
      telefone: '(51) 91111-8888'
    }
  ];

  const [vagas, setVagas] = useState(vagas_mockadas);

  return (
     <ScrollView>
    <View style={styles.container}>
      <Text style={styles.titulo}>Anúncios - Vagas em TI</Text>
        {vagas.map(vaga => (
          <Card
            key={vaga.id}
            nomeVaga={vaga.nomeVaga}
            descricaoVaga={vaga.descricaoVaga}
            telefone={vaga.telefone}
          />
        ))}
    </View>
    </ScrollView>
  );
}

export default Anuncios;
