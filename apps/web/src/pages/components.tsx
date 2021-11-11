import Button from '@/components/button'
import Panel from '@/components/panel'
import DefaultLayout from '@/layouts/default-layout'

export default function Home() {
  return (
    <DefaultLayout noPanel>
      <Panel title="Buttons">
        <Button>Button</Button>
        <Button disabled>Disabled</Button>
        <br />
        <Button variant="secondary">Button</Button>
        <Button variant="secondary" disabled>
          Disabled
        </Button>
        <br />
        <Button variant="link">Button</Button>
        <Button variant="link" disabled>
          Disabled
        </Button>
        <br />

        <Button size="small">Button</Button>
        <Button size="small" disabled>
          Disabled
        </Button>
        <br />
        <Button size="small" variant="secondary">
          Button
        </Button>
        <Button size="small" variant="secondary" disabled>
          Disabled
        </Button>
        <br />
        <Button size="small" variant="link">
          Button
        </Button>
        <Button size="small" variant="link" disabled>
          Disabled
        </Button>
      </Panel>
    </DefaultLayout>
  )
}
