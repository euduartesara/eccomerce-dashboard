'use client';

import { FormEvent, useState } from 'react';

type QuickSkuFormState = {
  sku: string;
  productName: string;
  type: 'NEW' | 'UPDATED';
  priceAdjusted: boolean;
  stockSynced: boolean;
  listingFixed: boolean;
  kitCreatedOrEnabled: boolean;
  note: string;
};

const defaultValues: QuickSkuFormState = {
  sku: '',
  productName: '',
  type: 'NEW',
  priceAdjusted: false,
  stockSynced: false,
  listingFixed: false,
  kitCreatedOrEnabled: false,
  note: '',
};

const checkboxFields: Array<{ field: keyof Pick<QuickSkuFormState, 'priceAdjusted' | 'stockSynced' | 'listingFixed' | 'kitCreatedOrEnabled'>; label: string }> = [
  { field: 'priceAdjusted', label: 'Ajuste de preço' },
  { field: 'stockSynced', label: 'Estoque sincronizado' },
  { field: 'listingFixed', label: 'Anúncio corrigido' },
  { field: 'kitCreatedOrEnabled', label: 'Kit criado/ativado' },
];

export function QuickSkuForm() {
  const [formState, setFormState] = useState(defaultValues);
  const [showObservation, setShowObservation] = useState(false);

  function updateField<K extends keyof QuickSkuFormState>(field: K, value: QuickSkuFormState[K]) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('quick-sku-submit', formState);
    setFormState(defaultValues);
    setShowObservation(false);
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid gap-3 md:grid-cols-3">
        <label className="space-y-1 text-sm">
          <span className="text-muted">SKU</span>
          <input
            className="w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm"
            onChange={(event) => updateField('sku', event.target.value)}
            placeholder="Ex: HSP-000123"
            value={formState.sku}
          />
        </label>

        <label className="space-y-1 text-sm md:col-span-2">
          <span className="text-muted">Nome do produto</span>
          <input
            className="w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm"
            onChange={(event) => updateField('productName', event.target.value)}
            placeholder="Ex: Cadeira de rodas X"
            value={formState.productName}
          />
        </label>
      </div>

      <label className="space-y-1 text-sm">
        <span className="text-muted">Tipo</span>
        <select
          className="w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm md:w-72"
          onChange={(event) => updateField('type', event.target.value as QuickSkuFormState['type'])}
          value={formState.type}
        >
          <option value="NEW">Novo cadastrado</option>
          <option value="UPDATED">Alterado</option>
        </select>
      </label>

      <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-4">
        {checkboxFields.map((item) => (
          <label key={item.field} className="flex items-center gap-2 rounded-lg border border-border p-2 text-sm text-text">
            <input
              checked={formState[item.field]}
              onChange={(event) => updateField(item.field, event.target.checked)}
              type="checkbox"
            />
            {item.label}
          </label>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          className="rounded-lg border border-border px-3 py-2 text-sm text-muted transition hover:text-text"
          onClick={() => setShowObservation((prev) => !prev)}
          type="button"
        >
          + Adicionar observação
        </button>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white transition hover:opacity-90" type="submit">
          Salvar registro
        </button>
      </div>

      {showObservation ? (
        <label className="block space-y-1 text-sm">
          <span className="text-muted">Observação</span>
          <textarea
            className="min-h-24 w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm"
            onChange={(event) => updateField('note', event.target.value)}
            placeholder="Detalhes adicionais do ajuste..."
            value={formState.note}
          />
        </label>
      ) : null}
    </form>
  );
}
