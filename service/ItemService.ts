import { useState } from "react";
import Item from "../model/Item";

    const [items, setItems] = useState<Item[]>([
        { id: '1', title: 'Item Exemplo 1' },
        { id: '2', title: 'Item Exemplo 2' },
      ]);
      
      const generateId = () => Date.now().toString();
    
      const addItem = () => {
        if (!inputText.trim()) {
          Alert.alert('Erro', 'Digite um título');
          return;
        }
    
        const newItem: Item = {
          id: generateId(),
          title: inputText.trim(),
        };
    
        setItems([...items, newItem]);
        closeModal();
      };
    
      const updateItem = () => {
        if (!inputText.trim() || !editingItem) {
          Alert.alert('Erro', 'Digite um título');
          return;
        }
    
        setItems(items.map(item =>
          item.id === editingItem.id
            ? { ...item, title: inputText.trim() }
            : item
        ));
        closeModal();
      };
    
      const deleteItem = () => {
        if (!editingItem) return;
    
        setItems(items.filter(item => item.id !== editingItem.id));
        closeModal();
      };