import { Header } from '../../components/Header';
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button'


import { Container, Form } from './styles';

export function New(){
  return (
  <Container>
    <Header />

    <main>
      <Form>
        <header>
          <h1>Criar nota</h1>
          <a href="/">Voltar</a>
        </header>

        <Input placeholder="Título" />
        <Textarea placeholder="Observações" />

        <Section title="Links Úteis">
          <NoteItem value="https://rocketseat.com.br" />
          <NoteItem isNew placeholder="Novo link"/>
        </Section>

        <Section title="Marcadores">
          <div className="tags">
            <NoteItem value="React"/>
            <NoteItem isNew placeholder="Nova tag"/>
          </div>
        </Section>

        <Button title="Salvar"/>
      </Form>
    </main>
  </Container>
  );
}