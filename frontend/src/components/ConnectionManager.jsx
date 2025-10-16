import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    Box,
    Alert,
    CircularProgress,
    Chip,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import {
    Computer,
    Wifi,
    Security,
    Speed,
    CloudQueue,
    CheckCircle
} from '@mui/icons-material';

const ConnectionManager = ({ onConnect, connectionState }) => {
    const [serverAddress, setServerAddress] = useState('192.168.1.103');
    const [isConnecting, setIsConnecting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (serverAddress.trim()) {
            setIsConnecting(true);
            onConnect(serverAddress.trim());
            setTimeout(() => setIsConnecting(false), 3000);
        }
    };

    const getStatusColor = () => {
        switch (connectionState) {
            case 'CONNECTING': return 'warning';
            case 'CONNECTED': return 'success';
            case 'AUTHENTICATED': return 'success';
            default: return 'default';
        }
    };

    const getStatusText = () => {
        switch (connectionState) {
            case 'CONNECTING': return 'Connexion...';
            case 'CONNECTED': return 'Connecté';
            case 'WAITING_APPROVAL': return 'En attente d\'approbation';
            case 'AUTHENTICATED': return 'Authentifié';
            default: return 'Déconnecté';
        }
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
        >
            <Card
                sx={{
                    maxWidth: 500,
                    width: '100%',
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    animation: 'slideInUp 0.6s ease-out'
                }}
            >
                <CardContent sx={{ p: 4 }}>
                    <Box textAlign="center" mb={3}>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                p: 2,
                                borderRadius: 3,
                                background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                                color: 'white',
                                mb: 2
                            }}
                        >
                            <Computer sx={{ fontSize: 40 }} />
                        </Box>
                        <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                            RemoteConnect Pro
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Connexion sécurisée au serveur de partage d'écran
                        </Typography>
                        
                        <Chip
                            label={getStatusText()}
                            color={getStatusColor()}
                            sx={{ mt: 2, fontWeight: 'bold' }}
                            icon={connectionState === 'CONNECTING' ? <CircularProgress size={16} /> : <CheckCircle />}
                        />
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Box mb={3}>
                            <TextField
                                fullWidth
                                label="Adresse du serveur"
                                value={serverAddress}
                                onChange={(e) => setServerAddress(e.target.value)}
                                disabled={isConnecting}
                                placeholder="192.168.1.100 ou nom.domaine.com"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <Wifi color="primary" sx={{ mr: 1 }} />
                                }}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        borderRadius: 2
                                    }
                                }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            disabled={isConnecting || !serverAddress.trim()}
                            sx={{
                                py: 1.5,
                                borderRadius: 2,
                                background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #1976d2, #1e88e5)'
                                },
                                fontWeight: 'bold',
                                fontSize: '1.1rem'
                            }}
                            startIcon={isConnecting ? <CircularProgress size={20} color="inherit" /> : <Computer />}
                        >
                            {isConnecting ? 'Connexion en cours...' : 'Se connecter'}
                        </Button>
                    </form>

                    <Divider sx={{ my: 3 }} />

                    <Box>
                        <Typography variant="h6" fontWeight="bold" gutterBottom color="primary">
                            Fonctionnalités
                        </Typography>
                        <List dense>
                            <ListItem>
                                <ListItemIcon>
                                    <Security color="success" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Chiffrement AES-256" 
                                    secondary="Sécurité de niveau militaire"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <Speed color="info" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Faible latence" 
                                    secondary="Optimisé pour la fluidité"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <CloudQueue color="primary" />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Multi-plateforme" 
                                    secondary="Compatible tous appareils"
                                />
                            </ListItem>
                        </List>
                    </Box>

                    <Alert 
                        severity="info" 
                        sx={{ 
                            mt: 2, 
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #e3f2fd, #f3e5f5)'
                        }}
                    >
                        💡 Assurez-vous que le serveur Java est démarré sur le port 8081
                    </Alert>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ConnectionManager;
