// ============================================
// NexaForge AI — Configuration Supabase (Front-end)
// ============================================

// Remplacez ces valeurs par celles de votre projet Supabase
// (Trouvables dans Settings > API sur supabase.com)

const SUPABASE_URL = 'https://icpvddbzszbcgalqwpmj.supabase.co';
// ATTENTION: Utilisez bien la clé "anon public" ici (pas la clé secrète service_role !)
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcHZkZGJ6c3piY2dhbHF3cG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMwMTIzNzQsImV4cCI6MjA5ODU4ODM3NH0.i86KevZHuwbDYjf3tJg4jij3ARLKl-6Mp15KB_mlL0I';

// Initialisation du client Supabase
// (Assurez-vous que le script Supabase JS est chargé dans votre HTML avant ce fichier)
let supabaseClient = null;

if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error("Supabase JS n'est pas chargé !");
}
