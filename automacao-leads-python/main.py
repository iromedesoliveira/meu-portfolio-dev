# Script de Processamento de Leads
def processar_leads(nome_arquivo):
    print(f"Iniciando processamento do arquivo: {nome_arquivo}")
    # Simulação de processamento de dados
    leads = ["Lead 1", "Lead 2", "Lead 3"]
    for lead in leads:
        print(f"Processando: {lead}...")
    print("Processamento concluído com sucesso!")

if __name__ == "__main__":
    processar_leads("lista_leads.csv")